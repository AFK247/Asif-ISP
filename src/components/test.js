const [course, setCourse] = useState({
    name: "",
    code: "",
    passMark: "",
    lic: "",
    subjects: [],
});

const [options, setOptions] = useState();

async function getSubjects() {
    const { data } = await axios.get("http://localhost:7000/subject")
    const option = data.map((item) => ({
        "value": item._id,
        "label": item.name
    }))

    setOptions({ options })
}

/*function handleSelect(event){
    setSubject(event.target.value)
}*/

function handleClick() {
    axios.post("http://localhost:3000/course/add", course).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <Form.Group className="mb-3" >
            <Form.Label>Subjects</Form.Label>
            <Select
                options={options}
                name="subjects"
                isMulti
                value={course.subjects}
                onChange={(selectedValues) => {
                    setCourse((preValue) => {
                        return {
                            ...preValue,
                            subjects: selectedValues,
                        };
                    });
                }}
            />
        </Form.Group>
    )
}

