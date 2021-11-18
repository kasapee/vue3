export default {
    name: 'HelloJSX',
    data() {
        return {
            cls_title: 'text-danger h1',
            cls_message: 'text-primary h5',
        }
    },
    props: {
        title: String,
        message: String
    },
    render(h) {
        return (
            <div class="aleart alert-primary">
                <h2 class={this.cls_title}>{ this.title }</h2>
                <p class={this.cls_message}>{ this.message }</p>
            </div>
        )
    }
}