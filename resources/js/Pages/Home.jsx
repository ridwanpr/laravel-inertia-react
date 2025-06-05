import { Link } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Home = ({ posts }) => {
    const route = useRoute();
    return (
        <>
            <h1 className="title">Hello</h1>

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        <Link
                            href={route("posts.show", post)}
                            className="text-link"
                        >
                            Read More
                        </Link>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read More
                        </Link> */}
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link, index) =>
                    link.url ? (
                        <Link
                            key={index}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-4 py-2 mx-1 bg-slate-600 text-white rounded-md ${
                                link.active ? "bg-slate-800" : ""
                            }`}
                            preserveScroll
                        />
                    ) : (
                        <span
                            key={index}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="px-4 py-2 mx-1 bg-gray-400 text-white rounded-md"
                        />
                    )
                )}
            </div>
        </>
    );
};

Home.ayout = (page) => <Layout children={page} />;

export default Home;
