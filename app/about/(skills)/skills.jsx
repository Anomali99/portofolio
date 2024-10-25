export default function Skills() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold mt-3 text-black" translate="no">
          Skills and Expertise
        </h2>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Beberapa keterampilan yang saya kuasai saat ini.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2">
          <CodepenIcon className="w-12 h-12" />
          <div className="font-medium" translate="no">
            Web Development
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <WebhookIcon className="w-12 h-12" />
          <div className="font-medium" translate="no">
            REST API
          </div>
        </div>
      </div>
    </section>
  );
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function WebhookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}
