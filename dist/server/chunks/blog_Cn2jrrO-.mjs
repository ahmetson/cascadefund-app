import { ObjectId } from 'mongodb';
import { g as getCollection, c as create } from './db_OZ8_cRuI.mjs';

function blogModelToBlog(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    author: model.author?.toString() || "",
    title: model.title,
    content: model.content,
    description: model.description,
    tags: model.tags || [],
    projects: model.projects?.map((p) => p.toString()) || [],
    projectTypes: model.projectTypes || [],
    createdTime: model.createdTime ? Math.floor(model.createdTime.getTime() / 1e3) : void 0,
    updatedTime: model.updatedTime ? Math.floor(model.updatedTime.getTime() / 1e3) : void 0,
    draft: model.draft ?? false
  };
}
function blogToBlogModel(blog) {
  return {
    _id: blog._id ? new ObjectId(blog._id) : void 0,
    author: new ObjectId(blog.author),
    title: blog.title,
    content: blog.content,
    description: blog.description,
    tags: blog.tags || [],
    projects: blog.projects?.map((p) => new ObjectId(p)) || [],
    projectTypes: blog.projectTypes || [],
    createdTime: blog.createdTime ? new Date(blog.createdTime * 1e3) : void 0,
    updatedTime: blog.updatedTime ? new Date(blog.updatedTime * 1e3) : void 0,
    draft: blog.draft ?? false
  };
}
async function getBlogById(id) {
  try {
    const collection = await getCollection("blogs");
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await collection.findOne({ _id: objectId });
    return blogModelToBlog(result);
  } catch (error) {
    console.error("Error getting blog by id:", error);
    return null;
  }
}
async function getBlogsByAuthor(authorId) {
  try {
    const collection = await getCollection("blogs");
    const objectId = typeof authorId === "string" ? new ObjectId(authorId) : authorId;
    const results = await collection.find({ author: objectId }).sort({ createdTime: -1 }).toArray();
    return results.map(blogModelToBlog).filter((blog) => blog !== null);
  } catch (error) {
    console.error("Error getting blogs by author:", error);
    return [];
  }
}
async function getAllBlogs() {
  try {
    const collection = await getCollection("blogs");
    const results = await collection.find({ draft: false }).sort({ createdTime: -1 }).toArray();
    return results.map(blogModelToBlog).filter((blog) => blog !== null);
  } catch (error) {
    console.error("Error getting all blogs:", error);
    return [];
  }
}
async function createBlog(blog) {
  try {
    const blogModel = blogToBlogModel(blog);
    if (!blogModel.createdTime) {
      blogModel.createdTime = /* @__PURE__ */ new Date();
    }
    return await create("blogs", blogModel);
  } catch (error) {
    console.error("Error creating blog:", error);
    return false;
  }
}

export { getBlogsByAuthor as a, getBlogById as b, createBlog as c, getAllBlogs as g };
