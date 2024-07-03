import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginBottom: 25,
  },
  formHorizontal: {
    flexDirection: "row",
  },
  scrollView: {
    width: "100%",
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    height: 70,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  form70: {
    width: "70%",
    marginBottom: 25,
    paddingRight: 10,
  },
  form30: {
    width: "30%",
    marginBottom: 25,
  },
};
