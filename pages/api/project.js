export function Get(req, res) {
    res.status(200).json(()=>{
        switch (req.name) {
        case 'kilid':
            return { name: 'John Doe' };

        default:
            return { name: 'John Doe' };
    }}
        )
}
