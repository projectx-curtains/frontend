import { useState } from "react";

import FilterTags from "../components";

import { sampleDataTags } from "../mocks/sampleDataTags";

const FilterTagsContainer = ({}) => {
  const initialState = sampleDataTags.map((tag: any) => ({
    ...tag,
    isTagRemoved: false,
  }));

  const [tags, setTags] = useState(initialState);

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTimeout(() => setTags(newTags), 400);
  };

  const handleClose = (index: number) => {
    const newTags = [...tags];
    newTags[index].isTagRemoved = true;
    setTags(newTags);
    removeTag(index);
  };

  return (
    <FilterTags
      tags={tags}
      handleClose={handleClose}
    />
  );
};
export default FilterTagsContainer;
