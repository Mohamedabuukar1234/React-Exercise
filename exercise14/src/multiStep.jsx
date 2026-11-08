
import { useReducer } from "react";
import { initialState, FormReducer } from "./reducer";

function Multi() {
    const [state, dispatch] = useReducer(FormReducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: "Update",
            field: e.target.name,
            value: e.target.value
        });
    };

    const next = () => {
            if (!state.firstName || !state.lastName) {
        alert("Fadlan magacaaga buuxi");
        return;
    }
        dispatch({ type: "nextStep" });
    };

    const prev = () => {
        dispatch({ type: "preve" });
    };

    const reset = () => {
        dispatch({ type: "Reset" });
    };

    return (
        <div>
            <h2>MultiStep Registration</h2>

            {state.step === 1 && (
                <div>
                    <h3>Step 1: Profile</h3>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={state.lastName}
                        onChange={handleChange}
                    />

                    <button onClick={next}>Next</button>
                </div>
            )}

            {state.step === 2 && (
                <div>
                    <h3>Step 2: Contact</h3>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone"
                        value={state.phone}
                        onChange={handleChange}
                    />

                    <button onClick={prev}>Back</button>
                    <button onClick={next}>Next</button>
                </div>
            )}

            {state.step === 3 && (
                <div>
                    <h3>Step 3: Review</h3>

                    <p>First Name: {state.firstName}</p>
                    <p>Last Name: {state.lastName}</p>
                    <p>Email: {state.email}</p>
                    <p>Phone: {state.phone}</p>

                    <button onClick={prev}>Back</button>
                    <button onClick={next}>Confirm</button>
                </div>
            )}

            {state.step > 3 && (
                <div>
                    <h3>Form Completed!</h3>
                    <button onClick={reset}>Start Over</button>
                </div>
            )}
        </div>
    );
}

export default Multi;
