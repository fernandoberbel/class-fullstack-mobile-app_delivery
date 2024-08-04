import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  headerBar: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 27,
  },
  cart: {
    width: 30,
    height: 30,
  },
  search: {
    marginTop: 15,
    marginBottom: 15,
  },
  texto: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    marginBottom: 10,
  },
};
