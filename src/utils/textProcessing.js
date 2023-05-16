import parse from 'html-react-parser';

const applyBoldStyle = (text) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

const applyTextStyle = (text) => {
  const styleText = applyBoldStyle(text);
  return parse(styleText);
};

export default applyTextStyle;
