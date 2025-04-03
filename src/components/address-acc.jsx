import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageAddress = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([
        { id: 1, address: "159/11 Dao Duy Anh, phuong 11, Phu Nhuan district, Ho Chi Minh city", isDefault: true },
        { id: 2, address: "354/41 Phan Van Tri, phuong 11, Binh Thanh district, Ho Chi Minh city", isDefault: false },
    ]);
    const [newAddress, setNewAddress] = useState("");

    const handleAddAddress = () => {
        if (newAddress.trim()) {
            setAddresses([...addresses, { id: Date.now(), address: newAddress, isDefault: false }]);
            setNewAddress("");
        }
    };

    const handleDelete = (id) => {
        setAddresses(addresses.filter((addr) => addr.id !== id));
    };

    const handleSetDefault = (id) => {
        setAddresses(addresses.map((addr) => ({ ...addr, isDefault: addr.id === id })));
    };

    return (
        <div className="mb-[120px] flex items-center justify-center">
            <div className="w-full">
                <h2 className="mb-4 text-[18px] font-semibold">Select default address</h2>
                <div>
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className="mb-8 flex items-center justify-between rounded-md border px-[18px]"
                        >
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="defaultAddress"
                                    checked={addr.isDefault}
                                    onChange={() => handleSetDefault(addr.id)}
                                    className="h-[60px]"
                                />
                                {addr.address}
                            </label>
                            <button
                                onClick={() => handleDelete(addr.id)}
                                className="text-primary hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <h2 className="mt-[100px] text-[18px] font-semibold">Add new address</h2>
                <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Enter new address"
                    className="mt-2 h-[60px] w-full rounded-md border p-2"
                />
                <button
                    onClick={handleAddAddress}
                    className="btn mt-[40px] w-[167px] rounded-md"
                >
                    Update changes
                </button>
            </div>
        </div>
    );
};

export default ManageAddress;
