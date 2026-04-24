export type FeaturedMenu = {
  id: string;
  name: string;
  description: string;
  imageLabel: string;
  imageUrl: string;
  price: number;
  isFeatured: boolean;
};

export type Testimonial = {
  id: string;
  customerName: string;
  reviewText: string;
  rating: number;
  avatarFallback: string;
};

export const restaurantInfo = {
  address: "Ruko Sentra Eropa Blok AB 4 No 30-31, Balikpapan Baru",
  city: "Balikpapan Baru",
  hours: "07:00 - 22:00",
  phoneDisplay: "085100612116",
  phoneLink: "6285100612116",
  category: "Chinese Food & Fresh Seafood",
  averageRating: 4.8,
};

const linktreeUrl = process.env.NEXT_PUBLIC_LINKTREE_URL?.trim();
const whatsappMessage = encodeURIComponent(
  "Halo, saya ingin pesan di Simpang Empat Suki.",
);

export const orderUrl =
  linktreeUrl && linktreeUrl.length > 0
    ? linktreeUrl
    : `https://wa.me/${restaurantInfo.phoneLink}?text=${whatsappMessage}`;

export const orderChannelLabel =
  linktreeUrl && linktreeUrl.length > 0 ? "Linktree" : "WhatsApp";

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${restaurantInfo.address}, ${restaurantInfo.city}`,
)}`;

const featuredMenus: FeaturedMenu[] = [
  {
    id: "cap-cay-goreng",
    name: "Cap Cay Goreng",
    description:
      "Tumisan aneka sayur segar dengan irisan ayam, bakso, dan seafood pilihan. Dimasak dengan tingkat kematangan pas dan bumbu gurih khas Simpang 4.",
    imageLabel: "Tumis Wok Signature",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop",
    price: 60000,
    isFeatured: true,
  },
  {
    id: "sapo-tahu-seafood",
    name: "Sapo Tahu Seafood",
    description:
      "Paduan tahu sutra lembut, udang, dan cumi segar yang dimasak sempurna dalam kuah kental gurih. Disajikan hangat, sangat cocok untuk dinikmati bersama nasi putih.",
    imageLabel: "Seafood Claypot",
    imageUrl:
      "https://images.unsplash.com/photo-1582450871972-ab5ce2111540?w=800&auto=format&fit=crop",
    price: 73500,
    isFeatured: true,
  },
  {
    id: "sapi-lada-hitam",
    name: "Sapi Lada Hitam",
    description:
      "Menu legendaris yang membesarkan nama kami! Daging sapi empuk dengan saus lada hitam pekat yang khas. Sangat dicintai warga lokal dan kerap dijadikan buah tangan (oleh-oleh) khas Balikpapan.",
    imageLabel: "Pepper Beef",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    price: 86500,
    isFeatured: true,
  },
  {
    id: "cumi-telur-asin",
    name: "Cumi Telur Asin",
    description:
      "Potongan cumi segar yang digoreng renyah, lalu dibalut lumeran saus telur asin (salted egg) asli yang gurih, creamy, dan bikin nagih.",
    imageLabel: "Savory Favorite",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop",
    price: 73500,
    isFeatured: true,
  },
  {
    id: "mantau-goreng",
    name: "Mantau Goreng",
    description:
      "Signature dish kami sejak 2003. Roti mantau yang renyah di luar dan sangat lembut di dalam. Pasangan paling sempurna untuk Sapi Lada Hitam dan favorit untuk dibawa pulang.",
    imageLabel: "Golden Bites",
    imageUrl:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop",
    price: 20000,
    isFeatured: true,
  },
];

const testimonials: Testimonial[] = [
  {
    id: "dina",
    customerName: "Maria Ulfa",
    reviewText:
      "Restoran dengan menu chinese food, pilihan menunya banyak, tempatx luas, rasanya enak2, paling juara mantau + sapi lada hitam, harga relatif. Sesuai rasalah.",
    rating: 5,
    avatarFallback: "MU",
  },
  {
    id: "rafi",
    customerName: "viNa azis",
    reviewText:
      "A Taste of France in Balikpapan's Favorite Chinese Eatery\n\nWhen you think of a classic Chinese restaurant, you might not expect to find expertly crafted pastries. But at Simpang Empat Suki, the unexpected becomes a delicious reality. This hidden gem in Balikpapan is a local favorite for its Chinese comfort food, but it's the unique combination of savory dishes and sophisticated desserts that sets it apart.",
    rating: 5,
    avatarFallback: "VA",
  },
  {
    id: "mira",
    customerName: "anikqo2ms",
    reviewText:
      "Salah satu rekomendasi tmpt makan yg menunya variatif , tmptnya jg lumayan luass, ada yg VIP, non smoking ataupun yg smoking area diluar.. bisa utk acara kantor, arisan, kumpul2 keluargaa bisa jg.\npelayanan cepat, utk rasa enak ,,\n\nSilahkaan dicobaa .. \uD83D\uDE00\uD83C\uDF1F",
    rating: 4.5,
    avatarFallback: "AN",
  },
];

export function getLandingPageData() {
  return {
    featuredMenus: featuredMenus.filter((menu) => menu.isFeatured),
    testimonials,
  };
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
