import SectionWithMedia from "../components/section/SectionWithMedia";
import SectionWithImage from "../components/section/SectionWithImage";
import PopularTags from "../components/PopularTags";
import itemsData from "../data/popuarTags";
import PostCards from "../components/JobPosts";
import posts from "../data/latestJobs";
import { PlatformStatus } from "../components/PlatformStatus";
import StatusData from "../data/StatusData";

function Home() {
  return (
    <div>
      <SectionWithMedia />
      <PopularTags itemsData={itemsData} />
      <PostCards posts={posts} />
      <SectionWithImage />
      <PlatformStatus StatusData={StatusData} />
    </div>
  );
}

export default Home;
