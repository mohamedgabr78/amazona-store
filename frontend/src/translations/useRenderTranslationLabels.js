import { translations } from "../translations/translation";
import { useAppLanguageContext } from "../context";

export default function useRenderTranslationLabel() {
  const { appLanguage } = useAppLanguageContext();

  const renderLabel = (label) => {
    if (!translations[label]) {
    }
    const o = translations[label].find(
      (translation) => translation.lang_id === appLanguage
    );
    return o.label;
  };

  let RenderTranslationLabel = {
    renderLabel,
  };

  return RenderTranslationLabel;
}
