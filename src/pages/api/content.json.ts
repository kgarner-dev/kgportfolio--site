export interface content {
    url: string,
    type: string,
    title: string,
    headline: string,
    date: string,
    thumbnail: string,
    tldr: string,
    priority: number
}


export async function GET({params}: any) {
    return new Response(
      JSON.stringify([
        {
            url: "bluebird",
            type: "project",
            title: "blueBird",
            headline: "AI-Powered Medical Assistant",
            date: "May 2024",
            thumbnail: "https://hbirmdoiqm.ufs.sh/f/C3h9qu5XgJvHP9cnCkG0ecIQzRyCWsJoThNrHZMSKBL49ljq",
            tldr: "RAG-powered chatbot that provided sources and answers to medical inqueries, tailored for medical professionals.",
            priority: 1
        },
        {
            url: "portfolio-site",
            type: "project",
            title: "Portfolio Site",
            headline: "Portfilio Site built with Astro",
            date: "January 2025",
            thumbnail: "https://hbirmdoiqm.ufs.sh/f/C3h9qu5XgJvHVbj5uQqW8bhg7kDjcYUI5le2ME3qfydFB04N",
            tldr: "Intuitive portfolio website used to highlight my experience, background, and content utilizing the best of Astro.",
            priority: 2
        },
        {
            url: "developer-tunnel-vision",
            type: "blog",
            title: "Avoid Developer Tunnel Vision",
            headline: "Why Developers Need a Bigger Perspective",
            date: "January 13, 2025",
            thumbnail: "https://hbirmdoiqm.ufs.sh/f/C3h9qu5XgJvHeC0CGBkXwnKd7ix46ouvOcLU09RNk18zgAIa",
            tldr: "Good developers solve problems, great developers solve them for everyone",
            priority: 2
        }
    ])
    )
  }