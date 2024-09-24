// components/About.js
const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-4">
        A Full Stack Developer with a skill set in MERN, Next.js, and Three.js.
      </h3>
      <p className="mb-4">
        <a
          href="https://ashabb.netlify.app/"
          className="text-blue-500 hover:underline"
        >
          We offer freelance web development using MERN, Next.js, and Three.js.
        </a>
      </p>
      <h1 className="text-3xl font-bold mb-4">About Our Project</h1>
      <p className="mb-4">
        Our project is a comprehensive inventory management application designed to streamline product tracking, sales, and overall inventory control. It aims to simplify the process for businesses of all sizes, enabling them to manage their products efficiently and effectively.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>🌟 User authentication and authorization</li>
        <li>📦 Add, update, and delete products</li>
        <li>🔍 Search and filter products with ease</li>
        <li>📊 Real-time inventory tracking</li>
        <li>📈 Detailed product analytics and reporting</li>
        <li>⚙️ Responsive design for optimal viewing on all devices</li>
        <li>🔒 Secure data handling with API integration</li>
        <li>🌐 Built with Next.js, React, and Tailwind CSS</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
      <ul className="list-disc pl-5">
        <li>🖥️ Node.js for server-side development</li>
        <li>💾 MongoDB for database management</li>
        <li>⚙️ RESTful API for seamless communication between the client and server</li>
        <li>🔄 Full CRUD operations for managing products</li>
        <li>🔧 Middleware for enhanced security and data processing</li>
      </ul>
    </div>
  );
};

export default About;
