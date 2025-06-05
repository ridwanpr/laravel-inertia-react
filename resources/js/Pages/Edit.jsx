import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";

const Edit = ({ post }) => {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    const route = useRoute();

    const submit = (e) => {
        e.preventDefault();
        put(route("posts.update", post));
    };

    return (
        <>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="Edit Post"
                />
            </Head>
            <h1 className="title">Update Post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body ? "!ring-red-600" : ""}
                    ></textarea>

                    {errors.body && (
                        <div className="text-red-600">{errors.body}</div>
                    )}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
