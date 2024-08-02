'use client';

import React, { useState } from 'react';
import { useFormStatus } from 'react';

export default function UserForm() {
    const [data, setData] = useState({ name: '', email: '' });
    const formStatus = useFormStatus();

    console.log(formStatus);

    return <p>{formStatus}</p>;
}
