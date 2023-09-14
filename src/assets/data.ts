import tv from "../assets/images/1-tv.jpg";
import phone from "../assets/images/2-download.jpg";
import apple from "../assets/images/3-everywhere.webp";
import kid from "../assets/images/4-kids.png";

export const languages = ["english", "bahasa"];

export const CONTENTS = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    imageUrl: tv,
    direction: "row",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    imageUrl: phone,
    direction: "row-reverse",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    imageUrl: apple,
    direction: "row",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    imageUrl: kid,
    direction: "row-reverse",
  },
];

export const FOOTER_LINKS = [
  {
    title: "FAQ",
    url: "https://help.netflix.com/en/node/412",
    element: "footer-login",
  },
  {
    title: "Help Center",
    url: "https://help.netflix.com/en/",
    element: "footer",
  },
  {
    title: "Account",
    url: "https://www.netflix.com/id/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
    element: "footer",
  },
  {
    title: "Media Center",
    url: "https://media.netflix.com/en/",
    element: "footer",
  },
  {
    title: "Investor Relations",
    url: "https://ir.netflix.net/ir-overview/profile/default.aspx",
    element: "footer",
  },
  { title: "Jobs", url: "https://jobs.netflix.com/", element: "footer" },
  {
    title: "Redeem Gift Cards",
    url: "https://www.netflix.com/id/redeem",
    element: "footer",
  },
  { title: "Buy Gift Cards", url: "https://www.netflix.com/gift-cards" },
  {
    title: "Ways to Watch",
    url: "https://devices.netflix.com/en/",
    element: "footer",
  },
  {
    title: "Terms of Use",
    url: "https://help.netflix.com/legal/termsofuse",
    element: "footer-login",
  },
  {
    title: "Privacy",
    url: "https://help.netflix.com/legal/privacy",
    element: "footer-login",
  },
  {
    title: "Cookie Preferences",
    url: "http://localhost:5173/",
    element: "footer-login",
  },
  {
    title: "Corporate Information",
    url: "https://help.netflix.com/legal/corpinfo",
    element: "footer-login",
  },
  {
    title: "Contact Us",
    url: "https://help.netflix.com/en/contactus",
    element: "footer",
  },
  { title: "Speed Test", url: "https://fast.com/", element: "footer" },
  {
    title: "Legal Notices",
    url: "https://help.netflix.com/legal/notices",
    element: "footer",
  },
  {
    title: "Only on Netflix",
    url: "https://www.netflix.com/id-en/browse/genre/839338",
    element: "footer",
  },
];

export const FAQ = [
  {
    header: "What is Netflix?",
    content:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    header: "How much does Netflix Cost?",
    content:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.",
  },
  {
    header: "Where can I watch?",
    content:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    header: "How do I cancel?",
    content:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "What can I watch on content?",
    content:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    header: "Is Netflix good for kids?",
    content:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];
