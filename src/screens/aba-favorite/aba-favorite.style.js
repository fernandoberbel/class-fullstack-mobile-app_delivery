import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: COLORS.white,
  },
  containerList: {
    flexGrow: 1,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  emptyText: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
  },
};
