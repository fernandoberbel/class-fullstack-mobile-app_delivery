import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  input: {
    width: "100%",
    // height: 40,
    backgroundColor: COLORS.light_gray,
    padding: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  label: {
    marginLeft: 5,
    marginBottom: 4,
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
};
