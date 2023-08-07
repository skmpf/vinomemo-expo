import * as Yup from "yup";

export interface INote {
  information: {
    name: string;
    country: string;
    region: string;
    grapes: string;
    producer: string;
    vintage: number | undefined;
    alcohol: string;
  };
  appearance: {
    intensity: string;
    color: string;
    variant: string;
  };
  nose: {
    intensity: string;
    aromas: string;
  };
  palate: {
    sweetness: string;
    acidity: string;
    tannin: string;
    alcohol: string;
    body: string;
    intensity: string;
    flavors: string;
    finish: string;
  };
  conclusions: {
    quality: string;
    comments: string;
  };
  _id: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type NoteFormValues = Omit<
  INote,
  "_id" | "creator" | "createdAt" | "updatedAt" | "__v"
>;

export const NoteFormInitialValues: NoteFormValues = {
  information: {
    name: "",
    country: "",
    region: "",
    grapes: "",
    producer: "",
    vintage: undefined,
    alcohol: "",
  },
  appearance: {
    intensity: "",
    color: "",
    variant: "",
  },
  nose: {
    intensity: "",
    aromas: "",
  },
  palate: {
    sweetness: "",
    acidity: "",
    tannin: "",
    alcohol: "",
    body: "",
    intensity: "",
    flavors: "",
    finish: "",
  },
  conclusions: {
    quality: "",
    comments: "",
  },
};

export const NoteFormValidationSchema = Yup.object().shape({
  information: Yup.object().shape({
    name: Yup.string().max(100, "Too long").required("Name is required"),
    country: Yup.string().max(50, "Too long").notRequired(),
    region: Yup.string().max(100, "Too long").notRequired(),
    grapes: Yup.string().max(100, "Too long").notRequired(),
    producer: Yup.string().max(100, "Too long").notRequired(),
    vintage: Yup.number()
      .positive()
      .integer()
      .min(1700, "Vintage does not exist")
      .max(new Date().getFullYear(), "Vintage must be in the past")
      .notRequired(),
    alcohol: Yup.string().min(3).max(4).notRequired(),
  }),
  appearance: Yup.object().shape({
    intensity: Yup.string()
      .notRequired()
      .oneOf(["", "light", "medium", "pronounced"]),
    color: Yup.string().notRequired().oneOf(["", "red", "white", "rosé"]),
    variant: Yup.string()
      .notRequired()
      .oneOf([
        "",
        "lemon",
        "amber",
        "gold",
        "pink",
        "pink-orange",
        "orange",
        "purple",
        "ruby",
        "garnet",
        "tawny",
      ]),
  }),
  nose: Yup.object().shape({
    intensity: Yup.string()
      .max(100)
      .notRequired()
      .oneOf(["", "light", "medium", "pronounced"]),
    aromas: Yup.string().max(300, "Too long").notRequired(),
  }),
  palate: Yup.object().shape({
    sweetness: Yup.string()
      .notRequired()
      .oneOf(["", "dry", "off-dry", "medium", "sweet"]),
    acidity: Yup.string().notRequired().oneOf(["", "low", "medium", "high"]),
    tannin: Yup.string().notRequired().oneOf(["", "low", "medium", "high"]),
    alcohol: Yup.string().notRequired().oneOf(["", "low", "medium", "high"]),
    body: Yup.string().notRequired().oneOf(["", "light", "medium", "full"]),
    intensity: Yup.string()
      .notRequired()
      .oneOf(["", "light", "medium", "pronounced"]),
    flavors: Yup.string().max(300, "Too long").notRequired(),
    finish: Yup.string().notRequired().oneOf(["", "short", "medium", "long"]),
  }),
  conclusion: Yup.object().shape({
    rating: Yup.string()
      .notRequired()
      .oneOf(["", "poor", "acceptable", "good", "very good", "outstanding"]),
    comments: Yup.string().max(500, "Too long").notRequired(),
  }),
});
