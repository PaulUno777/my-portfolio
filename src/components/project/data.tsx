import kamixPayImage from "../../assets/kamix-pay.png";
import kamixApiImage from "../../assets/open-api.png";
import leyaImage from "../../assets/leya.png";

export const projectData = {
  1: [
    {
      title: "KAMIX Pay - Payment Aggregator",
      image: kamixPayImage,
      description: (
        <>
          <p>
            As <strong>Tech Lead</strong>, I led the development of KAMIX Pay, a
            cross-border payment aggregator integrating multiple providers with
            a secure, role-based admin dashboard.
          </p>
          <p>
            I refactored the backend into{" "}
            <strong>Clean Architecture microservices</strong>, significantly
            improving performance, flexibility, and maintainability.
          </p>
        </>
      ),
      repository: "#", // Replace if needed
      demo: "https://sandbox.kamix.io/payments/login", // Replace if available
    },
  ],
  2: [
    {
      title: "KAMIX Backend Modernization",
      image: kamixApiImage,
      description: (
        <>
          <p>
            As a <strong>Backend Developer</strong>, I worked on modernizing the
            core backend of the Kamix <strong>mobile app</strong> and{" "}
            <strong>admin platform</strong>. I redesigned the architecture to
            separate features into dedicated <strong>microservices</strong> for
            better scalability.
          </p>
          <p>
            Introduced a <strong>Pub/Sub communication pattern</strong> to
            decouple services, and rewrote high-load components in{" "}
            <strong>Golang</strong> for performance optimization.
          </p>
        </>
      ),
      repository: "#", // Add actual repo link if available
      demo: "#", // Add link if demo/staging exists
    },
  ],
  3: [
    {
      title: "Leya - Legal Service Platform",
      image: leyaImage,
      description: (
        <>
          <p>
            At <strong>Nano Dev</strong>, I contributed to <strong>Leya</strong>
            , a legal tech platform connecting users with lawyers for
            consultations, document drafting, and case tracking.
          </p>
          <p>
            I helped design the backend using{" "}
            <strong>Clean Architecture</strong>, with a focus on modularity,
            performance, and DevOps practices for streamlined CI/CD and cloud
            deployment.
          </p>
        </>
      ),
      repository: "#", 
      demo: "#", 
    },
  ],
};
