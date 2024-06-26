import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { GraphQLClient, gql } from "graphql-request";

async function getData() {
  // const res = await fetch(
  //   `https://dev.to/api/articles?username=${personalData.devUsername}`
  // );
  const res = await fetch(
    `https://dev.to/api/articles?username=idealprojectuz`,
    {
      headers: {
        cookie: `
ahoy_visitor=3fc23eae-f445-4501-84f4-df19d4f29d18; ahoy_visit=5f8b1023-3a2b-421e-a61f-33215e07dc9c; remember_user_token=eyJfcmFpbHMiOnsibWVzc2FnZSI6Ilcxc3hOREE1TURNeFhTd2lTMnBJTVRKeVdXWjVhMFJUUW05bFdrcG1lVTRpTENJeE56RXlNemd3TmpBeUxqazVNRFF4TkNKZCIsImV4cCI6IjIwMjQtMTAtMDVUMDU6MTY6NDIuOTkwWiIsInB1ciI6ImNvb2tpZS5yZW1lbWJlcl91c2VyX3Rva2VuIn19--4edd3dcd6af489e201e842a165c2571933eb7696; _Devto_Forem_Session=9ad26a13a99599f7d7ddced4add94833`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

const portfolio = async () => {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer " + process.env.NEXT_PUBLIC_HYGRAPH_TOKEN,
    },
  });
  const query = gql`
    query Portfolios {
      portfolios(where: { createdBy: {} }) {
        id
        slug
        title
        singlePhoto {
          mimeType
          url(
            transformation: {
              image: { resize: { fit: clip, height: 450, width: 720 } }
              document: { output: { format: webp } }
              validateOptions: false
            }
          )
        }
        createdAt
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data;
  // console.log(graphQLClient);
};

export default async function Home() {
  const blogs = await getData();
  const portfoliodata = await portfolio();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects portfoliodata={portfoliodata.portfolios} />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
