const MAX_TITLE_LENGTH = 25;
const END_TEXT = '...';

export const sliceTitle = text => {
  if (typeof text !== 'string') {
    console.log(`Text type is not a string: ${typeof text}`);
    return;
  }

  if (text.length <= MAX_TITLE_LENGTH) {
    return text;
  }

  if (END_TEXT.length > MAX_TITLE_LENGTH) {
    return;
  }

  const textArray = text.split(' ');
  let resultText;
  const maxLength = MAX_TITLE_LENGTH - END_TEXT.length;

  for (let i = 0; i < textArray.length; i++) {
    if (i === 0) {
      if (textArray[i].length > MAX_TITLE_LENGTH) {
        console.log(
          `First word length is longer that maxLength: ${textArray[i].length}`,
        );
        break;
      }

      resultText = textArray[i];
    } else {
      const nextResult = `${resultText} ${textArray[i]}`;
      if (nextResult.length >= maxLength) {
        resultText += END_TEXT;
        break;
      } else {
        resultText = nextResult;
      }
    }
  }

  return resultText;
};
