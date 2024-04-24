import { Colors } from "../../../../utils/colors";
import { crypto } from "../../../../data/homeData";

const { blackprimary900, whiteprimary600, greenprimary600 } = Colors;

// GENE OPTIONS THAT AFFECT THE WHOLE STACKS WITHIN THE MAIN STACK
export const generalStackOptions = {
  headerStyle: { backgroundColor: blackprimary900 },
  headerTintColor: whiteprimary600,
  contentStyle: { backgroundColor: blackprimary900 },
};

// FUNCTION TO HANDLE THE SINGLE CRYPTO PAGE OPTIONS
export const singleCrypto = (route: any) => {
  const id = route.params?.cryptoId;
  const findCrypto = crypto.find((each) => each.id == id);

  return {
    title: findCrypto?.name,
    headerBackTitleVisible: false,
  };
};
