const Section = ({ children }) => {
    return (
      <section className="bg-primary text-white min-h-screen flex flex-col lg:flex-row items-center justify-center py-20">
        {children}
      </section>
    );
  };

  
  export default Section