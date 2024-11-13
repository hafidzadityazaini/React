export default function App() {
    const title = "Coba React Praktek Soal 2";
    const paragraph  = "Lorem ipsum dolor sit  amet consectetur adipisicing elit. Voluptate, eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eveniet!";
      const css = {
        paragraph : {
          color : "red"
          
        },
      };
    
    return ( 
      <>
      <p></p>
      <img src="react.png" alt="cobaReact" className="mx-auto"/>
      <h1 className="text-center text-blue-400 text-4xl pt-24">{title}</h1>
      <p className="" style={css.paragraph}>{paragraph}</p>
      </>
    );
  };
