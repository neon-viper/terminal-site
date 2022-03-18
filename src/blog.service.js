export default class BlogService {

    getBlogPosts() {
        return [
            {
                id: 1,
                title: "What's the deal with airline food anyway?",
                content: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.\n"
            },
            {
                id: 2,
                title: "Slipsum example post",
                content: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.\n"
            },
            {
                id: 3,
                title: "Some random post, are you detecting a pattern yet?",
                content: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.\n"
            }
        ]
    }

    getFormattedBlogPosts() {
        const posts = this.getBlogPosts();
        let string = "";

        posts.forEach((post, index) => {
            const title = `${post.title.substring(0, 64)}${(post.title.length > 64) ? '...' : ''}\n`;
            const preview = `${post.content.substring(0, 128)}...\n`;

            string += `[ID:${post.id}] ${title}\n`;
            string += preview + "\n";
            string += "<a href='#'>Read the post</a>";

            if (index !== posts.length - 1) {
                string += "\n --- \n\n";
            }
        });

        console.log(string);

        return string;
    }
}
