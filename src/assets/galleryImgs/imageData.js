import Elijah from "../images/elijah.jpg";
import GalleryImg1 from "./galleryImgData/galleryImg1.jpg";
import GalleryImg2 from "./galleryImgData/galleryImg2.jpg"
import GalleryImg3 from "./galleryImgData/galleryImg3.jpg"
import GalleryImg4 from "./galleryImgData/galleryImg4.jpg"
import GalleryImg5 from "./galleryImgData/galleryImg5.jpg"
import GalleryImg6 from "./galleryImgData/galleryImg6.jpg"
import GalleryImg7 from "./galleryImgData/galleryImg7.jpg"
import GalleryImg8 from "./galleryImgData/galleryImg8.jpg"
import GalleryImg9 from "./galleryImgData/galleryImg9.jpg"
import GalleryImg10 from "./galleryImgData/galleryImg10.jpg"
import GalleryImg11 from "./galleryImgData/galleryImg11.jpg"
import GalleryImg12 from "./galleryImgData/galleryImg12.jpg"
import GalleryImg13 from "./galleryImgData/galleryImg13.jpg"


const imageData = [
    {
      section: "Conference Highlights",
      images: [
        { src: Elijah, title: "Keynote Speech", category: "Conference" },
        { src: GalleryImg1, title: "Panel Discussion", category: "Conference" },
        { src: GalleryImg2, title: "Networking Session", category: "Conference" },
        { src: GalleryImg3, title: "Networking Session", category: "Conference" },
        { src: GalleryImg4, title: "Networking Session", category: "Conference" },
        { src: GalleryImg5, title: "Networking Session", category: "Conference" },
        { src: GalleryImg6, title: "Networking Session", category: "Conference" },
        { src: GalleryImg7, title: "Networking Session", category: "Conference" },
        { src: GalleryImg8, title: "Networking Session", category: "Conference" },
      ],
    },
    {
      section: "Workshops",
      images: [
        { src: GalleryImg9, title: "Coding Workshop", category: "Workshops" },
        { src: GalleryImg10, title: "Leadership Training", category: "Workshops" },
        { src: GalleryImg11, title: "Design Thinking", category: "Workshops" },
      ],
    },
    {
      section: "Community Outreach",
      images: [
        { src: GalleryImg12, title: "Charity Event", category: "Outreach" },
        { src: GalleryImg13, title: "School Visit", category: "Outreach" },
        { src: "/assets/images/outreach3.jpg", title: "Medical Camp", category: "Outreach" },
      ],
    },
  ];
  
  export default imageData;
  