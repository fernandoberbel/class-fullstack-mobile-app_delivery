import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  restaurants: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    padding: 8,
  },
  nome: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    marginBottom: 3,
  },
  endereco: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray,
  },
  favorito: {
    width: 30,
    height: 30,
  },
};
