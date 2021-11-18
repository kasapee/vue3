export default {
    name: 'HelloJSX',
    data() {
        return {
            title: 'Hello JSX',
            message: 'This is sample message',
        }
    },
    render(h) {
        return (
            <div class="aleart alert-primary">
                <h2>{ this.title }</h2>
                <p>{ this.message }</p>
            </div>
        )
    }
}