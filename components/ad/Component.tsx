import React from "react";

class AdComponent extends React.Component {
  componentDidMount() {
    const installGoogleAds = () => {
      const elem = document.createElement("script");
      elem.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installGoogleAds();
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        data-adtest="on"
        style={{ width: "90%", height: 300 }}
        data-ad-client="ca-pub-6647425709742724"
        data-ad-slot="7428936792"
        data-ad-format="vertical, auto"
        // data-ad-responsive="true"
      />
    );
  }
}

export default AdComponent;

// const CustomIns = styled.ins`
//   width: 320px;
//   height: 100px;

//   @media (min-width: 500px) {
//     width: 468px;
//     height: 60px;
//   }

//   @media (min-width: 800px) {
//     width: 728px;
//     height: 90px;
//   }
// `;
