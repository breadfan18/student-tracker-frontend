// Components
const HWSubmission = props => {
    return (
        <div>
            <h1>Submit a Homework</h1>
            <form>
                <label>
                    First Name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" />
                </label>
                <label>
                    Homework:
                    <select name="homework">
                        <option value="homework1">Homework 1</option>
                        <option value="homework2">Homework 2</option>
                        <option value="homework3">Homework 3</option>
                        <option value="homework4">Homework 4</option>
                    </select>
                </label>
                <label>
                    Repo Link:
                    <input type="text" name="repoLink" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default HWSubmission;