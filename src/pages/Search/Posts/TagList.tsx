import { useRef } from "react";

import Button from "@common/Button";
import { FaTimes } from "react-icons/fa";
import Tag from "@common/Tag";
import  useTagParams  from "@hooks/useTagParams";
import preventDefault from "@hoc/preventDefault";

export const TagList = () => {
  const { tags, deleteTag, addTag } = useTagParams();
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = preventDefault(() => {
    addTag(tagInputRef.current?.value || "");
  });

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-2">Filter by Tags</h3>
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="tag"
            placeholder="Type a tag and press Enter"
            className="input input-sm input-bordered w-full max-w-xs"
            ref={tagInputRef}
          />
          <Button type="submit" variant="neutral" size="sm">
            Add
          </Button>
        </form>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={index}>
              <Tag
                renderIcon={(props) => (
                  <FaTimes
                    size={props.iconSize}
                    onClick={() => deleteTag(tag)}
                  />
                )}
              >
                {tag}
              </Tag>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
