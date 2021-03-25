export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605c3b1d6ed7a352ee7ae5ac",
                  title: "Sanity Studio",
                  name: "generic-tech-blog-studio",
                  apiId: "3817f287-709e-4cee-931f-35fd30db242b",
                },
                {
                  buildHookId: "605c3b1d4d88b657a85f8b17",
                  title: "Blog Website",
                  name: "generic-tech-blog",
                  apiId: "de4986c9-6f29-4f73-a717-8b67ef7d37f9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ysrji/generic-tech-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://generic-tech-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
