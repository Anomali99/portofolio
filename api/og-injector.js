import fs from "fs"
import path from "path"

import projectsData from "../src/data/projects.json"

export default async function handler(req, res) {
  const { slug } = req.query

  const project = projectsData.find((p) => p.slug === slug)

  const title = project
    ? `${project.title} | Anomali99`
    : "Anomali99 Portofolio"

  const desc = project
    ? project.description[0]
    : "Portofolio profesional Nur Fatiq, Full Stack Developer yang berfokus pada pengembangan aplikasi web, mobile, dan solusi IoT."

  const image =
    project && project.thumbnail
      ? `https://www.anomali99.my.id${project.thumbnail}`
      : "https://www.anomali99.my.id/images/me/og-image.png"

  try {
    const filePath = path.join(process.cwd(), "index.html")

    if (!fs.existsSync(filePath)) {
      const fallbackPath = path.join(process.cwd(), "dist", "index.html")
      if (fs.existsSync(fallbackPath)) {
        var html = fs.readFileSync(fallbackPath, "utf8")
      } else {
        throw new Error("index.html tidak ditemukan di " + filePath)
      }
    } else {
      var html = fs.readFileSync(filePath, "utf8")
    }

    html = html
      .replace(/<title>.*?<\/title>/g, `<title>${title}</title>`)
      .replace(
        /<meta property="og:title" content=".*?"\s*\/?>/g,
        `<meta property="og:title" content="${title}" />`,
      )
      .replace(
        /<meta property="og:description" content=".*?"\s*\/?>/g,
        `<meta property="og:description" content="${desc}" />`,
      )
      .replace(
        /<meta property="og:image" content=".*?"\s*\/?>/g,
        `<meta property="og:image" content="${image}" />`,
      )
      // Tambahkan juga untuk Twitter Card
      .replace(
        /<meta property="twitter:title" content=".*?"\s*\/?>/g,
        `<meta property="twitter:title" content="${title}" />`,
      )
      .replace(
        /<meta property="twitter:description" content=".*?"\s*\/?>/g,
        `<meta property="twitter:description" content="${desc}" />`,
      )
      .replace(
        /<meta property="twitter:image" content=".*?"\s*\/?>/g,
        `<meta property="twitter:image" content="${image}" />`,
      )

    res.setHeader("Content-Type", "text/html")
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
    res.status(200).send(html)
  } catch (error) {
    console.error("Error reading index.html:", error)
    res.status(500).send("Internal Server Error")
  }
}
