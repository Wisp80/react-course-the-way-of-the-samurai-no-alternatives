function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 0));

type PropsType = {
    value: string
    onChange: () => void
    onSelect: (trackId: string) => void
}

function Component(props: PropsType) {
    props.onChange()
    props.onSelect('91')
    return 'Value: ' + props.value;
}

console.log(Component(
    {
        value: 'hello',
        onChange: () => {
            console.log('onChange');
        },
        onSelect: (trackId: string) => {
            console.log('onSelect: ' + trackId);
        }
    }
));