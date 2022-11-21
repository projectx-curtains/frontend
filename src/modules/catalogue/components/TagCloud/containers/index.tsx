import { useState } from "react";

import TagCloud from "../components";

import { ITagCloudContainerProps } from "../interfaces";
import { sampleDataTags } from "../mocks/sampleDataTags";

const TagCloudContainer = (
  {
    // id,
    // name,
    // colorTheSquare,
    // color,
    // removeTag,
  }
) => {
  // This actually create array for each component
  // Это фактически создает массив для каждого компонента
  const [tags, setTags] = useState(
    sampleDataTags.map((tag: any) => ({ ...tag, isTagRemoved: false }))
  );
  console.log(tags);
  // so this handler make no sense coz state stores only 1 element
  //так что этот обработчик не имеет смысла, потому что состояние хранит только 1 элемент
  const handleClose = (index: number) => {
    // setTags(
    //   tags.map((tag) => (tag.id === id ? { ...tag, isTagRemoved: true } : tag))
    // );
    const newState = [...tags];
    console.log(newState);

    newState[index].isTagRemoved = true;
    setTags(newState);
    setTimeout(() => setTags(tags.slice(index, index + 1)), 400);
  };

  // tags[id].removeTag

  return <TagCloud tags={tags} handleClose={handleClose} />;
};
export default TagCloudContainer;
