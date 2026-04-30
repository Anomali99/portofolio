import fs from "fs"
import path from "path"
// Langsung import JSON agar dibundel oleh Vercel
import projectsData from "../src/data/projects.json"

export default async function handler(req, res) {
  try {
    const { slug } = req.query

    const project = projectsData.find((p) => p.slug === slug)

    const title = project
      ? `${project.title} | Anomali99`
      : "Anomali99 Portofolio"
    const desc = project
      ? project.description[0]
      : "Software Engineer & IoT Enthusiast"
    const image =
      project && project.thumbnail
        ? `https://www.anomali99.my.id${project.thumbnail}`
        : "https://www.anomali99.my.id/images/me/og-image.png"

    const indexPath = path.join(process.cwd(), "dist", "index.html")
    if (!fs.existsSync(indexPath)) {
      const rootPath = path.join(process.cwd(), "index.html")
      if (!fs.existsSync(rootPath)) {
        throw new Error("index.html tidak ditemukan di jalur manapun")
      }
      var html = fs.readFileSync(rootPath, "utf8")
    } else {
      var html = fs.readFileSync(indexPath, "utf8")
    }

    const finalHtml = html
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta property="og:title" content=".*?"\s*\/?>/,
        `<meta property="og:title" content="${title}" />`,
      )
      .replace(
        /<meta property="og:description" content=".*?"\s*\/?>/,
        `<meta property="og:description" content="${desc}" />`,
      )
      .replace(
        /<meta property="og:image" content=".*?"\s*\/?>/,
        `<meta property="og:image" content="${image}" />`,
      )
      .replace(
        /<meta property="twitter:image" content=".*?"\s*\/?>/,
        `<meta property="twitter:image" content="${image}" />`,
      )

    res.setHeader("Content-Type", "text/html")
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate")
    return res.status(200).send(finalHtml)
  } catch (error) {
    console.error("OG Injector Error:", error.message)
    return res.status(500).send(`Server Error: ${error.message}`)
  }
}
