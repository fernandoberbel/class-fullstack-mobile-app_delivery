import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  produto: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  foto: {
    height: 80,
    width: 80,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    padding: 8,
  },
  nome: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
  },
  descricao: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  valor: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
    marginTop: 8,
  },
};
