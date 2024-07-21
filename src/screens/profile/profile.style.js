import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: COLORS.white,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  icons: {
    height: 30,
    width: 30,
  },
  textos: {
    flex: 1,
    marginLeft: 10,
  },
  titulo: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  subtitulo: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  expand: {
    height: 20,
    width: 20,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
};
