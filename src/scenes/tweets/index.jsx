import { Box } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import Footer from "../../components/Footer";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = () => {
  return (
    <Box>
      <CoverImage title="Consignas" image={imag.img6} />
      <TwitterTweetEmbed
        data-theme="dark"
        tweetId="1512075344269832196"
        placeholder={<p>Loading tweet...</p>}
      />
    </Box>
  );
};

export default Tweet;
