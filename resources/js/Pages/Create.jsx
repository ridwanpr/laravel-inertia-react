import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/posts");
    };

    return (
        <>
            <h1 className="title">Create</h1>

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
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
