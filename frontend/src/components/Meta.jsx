import { Helmet } from "react-helmet-async";

const Meta = ({
  title = "Welcome To Galleria",
  description = "The number one marketplace for one of a kind art.",
  keywords = "art, buy art, avant-garde",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

// Meta.defaultProps = {
//   title: "Welcome To Galleria",
//   description: "The number one marketplace for one of a kind art.",
//   keywords: "art, buy art, avant-garde",
// };

export default Meta;
