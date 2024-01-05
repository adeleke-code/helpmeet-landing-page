import car from "../assets/car.png";
import baker from "../assets/baker.png";
import avatar from "../assets/avatar.png";
import tailor from "../assets/tailor.png";
import plumber from "../assets/plumber.png";
import pottery from "../assets/pottery.png";
import scupltor from "../assets/sculptor.png";
import shoeMaker from "../assets/shoe-maker.png";
import beadMaker from "../assets/bead-maker.png";
import farmWorker from "../assets/farm-worker.png";
import ironBender from "../assets/iron-bender.png";
import electrician from "../assets/electrician.png";
import hairdresser from "../assets/hair-dresser.png";
import truckDriver from "../assets/truck-driver.png";
import paintArtist from "../assets/paint-artist.png";
import photographer from "../assets/photographer.png";
import musicTeacher from "../assets/music-teacher.png";
import basketWeaver from "../assets/basket-weaver.png";
import eventPlanner from "../assets/event-planner.png";
import autoPanelBeater from "../assets/auto-panel.png";
import dstvInstaller from "../assets/dstv-installer.png";
import phoneRepairer from "../assets/phone-repairer.png";
import interiorDecorator from "../assets/interior-deco.png";
import buildingMaterials from "../assets/building-materials.png";
import mechanicalEngineer from "../assets/mechanical-engineer.png";

const artisans = [
  {
    name: "Rewire",
    username: "Engine Freak",
    coverImage: car,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can fix your car faulty wiring.",
  },
  {
    name: "Plumber",
    username: "Pipe Masters",
    coverImage: plumber,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I do your plumbing works and fix leaky pipes.",
  },
  {
    name: "Building Materials",
    username: "Aboki Supplies",
    coverImage: buildingMaterials,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description:
      "I can drill your borehole and fix your water pipes connections.",
  },
  {
    name: "DSTV Installer",
    username: "Francis Uzo",
    coverImage: dstvInstaller,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description:
      "I can install, track and maintain your DSTV and other pay TVs.",
  },
  {
    name: "Mechanical Engineer",
    username: "Needforlights",
    coverImage: mechanicalEngineer,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description:
      "I can fix your mechanical and electronical needs in your projects.",
  },
  {
    name: "Photographer",
    username: "Bolagade Bolakale",
    coverImage: photographer,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I will handle your event and lifestyle photography needs .",
  },
  {
    name: "Music Teacher",
    username: "Oyin Bodele",
    coverImage: musicTeacher,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description:
      "I can teach music  and sound art both privately and in school.",
  },
  {
    name: "Potter",
    username: "Don Vikki",
    coverImage: pottery,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Basket Weaver",
    username: "Hanatu-AsabeBaba",
    coverImage: basketWeaver,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Bead Maker",
    username: "Maasai_mara",
    coverImage: beadMaker,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Electrician",
    username: "Elewedu Idan Gangan",
    coverImage: electrician,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Event Planner",
    username: "Native Event Bookings",
    coverImage: eventPlanner,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Interior Decorator",
    username: "Dele Shawns",
    coverImage: interiorDecorator,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Baker",
    username: "Ibukun Alase",
    coverImage: baker,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Hairdresser",
    username: "Cinderella Ella",
    coverImage: hairdresser,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Paint Artist",
    username: "Blessed Jaga",
    coverImage: paintArtist,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Phone Repairer",
    username: "Getfixed",
    coverImage: phoneRepairer,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Sculptor",
    username: "Oluya Apoda",
    coverImage: scupltor,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Shoe Maker",
    username: "Osondu Diallo",
    coverImage: shoeMaker,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Tailor",
    username: "Sisi Amunidara",
    coverImage: tailor,
    avatar: avatar,
    price: "N4200",
    rating: 24,
  },
  {
    name: "Auto Panel Beater",
    username: "Odion Jago",
    coverImage: autoPanelBeater,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Iron Bender",
    username: "Oluayeba Babendel",
    coverImage: ironBender,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Truck Driver",
    username: "Babas Deloxe",
    coverImage: truckDriver,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
  {
    name: "Farm Worker",
    username: "Everythinggreen",
    coverImage: farmWorker,
    avatar: avatar,
    price: "N4200",
    rating: 24,
    likes: 33,
    description: "I can make various types of potteries with mud and ceramic.",
  },
];

export default artisans;
