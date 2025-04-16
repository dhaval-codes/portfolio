import React from "react";
import { BlogsComponentWrpr, Heading, SubHeading } from "./style";

function BlogsComponent({ ref }) {
  return (
    <BlogsComponentWrpr ref={ref}>
      <SubHeading>BLOGS</SubHeading>
      <Heading>
        Sometimes I Just Write Blogs
        <br />
        Here Are Some New Ones
      </Heading>
      <div>Website under construction, need to link Medium APIs</div>
    </BlogsComponentWrpr>
  );
}

export default BlogsComponent;
