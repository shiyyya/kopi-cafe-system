import { useState } from "react";
import "./owner-inventory.css";
import Arrow from "../../../assets/icons/arrow-down.svg?react";
import OwnerHeader from "/src/components/layout/owner-header/owner-header.jsx";
import Item_Inventory from "/src/components/blocks/items-inventory/items.jsx";
import inventoryData from "/src/data/inventory.js";

function OwnerInventory() {
    const [inventory, setInventory] = useState(inventoryData);
    const [search, setSearch] = useState("");

    const [showBranch, setShowBranch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);

    const [branch, setBranch] = useState("all");
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("none");

    const [adjustments, setAdjustments] = useState({});


    const filteredInventory = inventory
        .filter((item) => {
            const matchesSearch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesBranch =
                branch === "all" ||
                item.branches?.includes(branch);

            if (filter === "low") {
                return (
                    matchesSearch &&
                    matchesBranch &&
                    Number(item.quantity) < 10
                );
            }

            if (filter === "high") {
                return (
                    matchesSearch &&
                    matchesBranch &&
                    Number(item.quantity) >= 10
                );
            }

            return matchesSearch && matchesBranch;
        })
        .sort((a, b) => {
            if (sort === "name") {
                return a.name.localeCompare(b.name);
            }

            if (sort === "quantity") {
                return Number(b.quantity) - Number(a.quantity);
            }

            if (sort === "unit") {
                const unitCompare = a.unit.localeCompare(b.unit);

                if (unitCompare !== 0) {
                    return unitCompare;
                }

                return Number(a.quantity) - Number(b.quantity);
            }

            if (sort === "expiration") {
                return (
                    new Date(a.expirationDate) -
                    new Date(b.expirationDate)
                );
            }

            return 0;
        });


    const handleBranchChange = (selectedBranch) => {
        setBranch(selectedBranch);
        setShowBranch(false);
    };


    const handleAdjustmentChange = (id, value) => {
        setAdjustments((current) => ({
            ...current,
            [id]: value
        }));
    };


    const handleIncrease = (id) => {
        const adjustment = Number(adjustments[id]) || 0;

        if (adjustment <= 0) return;

        setInventory((current) =>
            current.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              Number(item.quantity) + adjustment
                      }
                    : item
            )
        );

        setAdjustments((current) => ({
            ...current,
            [id]: ""
        }));
    };


    const handleDecrease = (id) => {
        const adjustment = Number(adjustments[id]) || 0;

        if (adjustment <= 0) return;

        setInventory((current) =>
            current.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(
                              0,
                              Number(item.quantity) - adjustment
                          )
                      }
                    : item
            )
        );

        setAdjustments((current) => ({
            ...current,
            [id]: ""
        }));
    };


    return (
        <div className="InventoryPage">

            <OwnerHeader title="Kopi Express / Owner" />


            <div className="Inventory">

                <div className="InventoryControls">


                    {/* SEARCH */}

                    <div className="InventorySearch">

                        <span>⌕</span>

                        <input
                            id="inventory-search"
                            name="inventory-search"
                            type="text"
                            placeholder="Search inventory..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>


                    {/* ACTIONS */}

                    <div className="InventoryActions">


                        {/* BRANCH */}

                        <div className="InventoryAction">

                            <button
                                onClick={() => {
                                    setShowBranch((current) => !current);
                                    setShowFilter(false);
                                    setShowSort(false);
                                }}
                            >
                                Branch

                                <span>
                                    <Arrow />
                                </span>
                            </button>


                            {showBranch && (
                                <div className="InventoryDropdown">

                                    <button
                                        onClick={() =>
                                            handleBranchChange("all")
                                        }
                                    >
                                        All Branches
                                    </button>


                                    <button
                                        onClick={() =>
                                            handleBranchChange("Poblacion")
                                        }
                                    >
                                        Poblacion
                                    </button>


                                    <button
                                        onClick={() =>
                                            handleBranchChange("Bunsuran II")
                                        }
                                    >
                                        Bunsuran II
                                    </button>


                                    <button
                                        onClick={() =>
                                            handleBranchChange(
                                                "Cacarong Bata"
                                            )
                                        }
                                    >
                                        Cacarong Bata
                                    </button>

                                </div>
                            )}

                        </div>


                        {/* FILTER */}

                        <div className="InventoryAction">

                            <button
                                onClick={() => {
                                    setShowFilter((current) => !current);
                                    setShowBranch(false);
                                    setShowSort(false);
                                }}
                            >
                                Filter

                                <span>
                                    <Arrow />
                                </span>
                            </button>


                            {showFilter && (
                                <div className="InventoryDropdown">

                                    <button
                                        onClick={() => {
                                            setFilter("all");
                                            setShowFilter(false);
                                        }}
                                    >
                                        All
                                    </button>


                                    <button
                                        onClick={() => {
                                            setFilter("low");
                                            setShowFilter(false);
                                        }}
                                    >
                                        Low Stock
                                    </button>


                                    <button
                                        onClick={() => {
                                            setFilter("high");
                                            setShowFilter(false);
                                        }}
                                    >
                                        High Stock
                                    </button>

                                </div>
                            )}

                        </div>


                        {/* SORT */}

                        <div className="InventoryAction">

                            <button
                                onClick={() => {
                                    setShowSort((current) => !current);
                                    setShowBranch(false);
                                    setShowFilter(false);
                                }}
                            >
                                Sort

                                <span>
                                    <Arrow />
                                </span>
                            </button>


                            {showSort && (
                                <div className="InventoryDropdown">

                                    <button
                                        onClick={() => {
                                            setSort("none");
                                            setShowSort(false);
                                        }}
                                    >
                                        Default
                                    </button>


                                    <button
                                        onClick={() => {
                                            setSort("name");
                                            setShowSort(false);
                                        }}
                                    >
                                        Name
                                    </button>


                                    <button
                                        onClick={() => {
                                            setSort("quantity");
                                            setShowSort(false);
                                        }}
                                    >
                                        Quantity
                                    </button>


                                    <button
                                        onClick={() => {
                                            setSort("unit");
                                            setShowSort(false);
                                        }}
                                    >
                                        Unit
                                    </button>


                                    <button
                                        onClick={() => {
                                            setSort("expiration");
                                            setShowSort(false);
                                        }}
                                    >
                                        Expiration Date
                                    </button>

                                </div>
                            )}

                        </div>

                    </div>

                </div>


                {/* INVENTORY TABLE */}

                <div className="InventoryTable">

                    <div className="InventoryHeader">

                        <span>Purchase Date</span>
                        <span>Name</span>
                        <span>Quantity</span>
                        <span>Unit</span>
                        <span>Expiration Date</span>
                        <span>Adjust Stock</span>

                    </div>


                    <div className="InventoryItems">

                        {filteredInventory.map((item) => (

                            <Item_Inventory
                                key={item.id}
                                item={item}
                                adjustment={
                                    adjustments[item.id] || ""
                                }
                                onAdjustmentChange={(value) =>
                                    handleAdjustmentChange(
                                        item.id,
                                        value
                                    )
                                }
                                onIncrease={() =>
                                    handleIncrease(item.id)
                                }
                                onDecrease={() =>
                                    handleDecrease(item.id)
                                }
                            />

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default OwnerInventory;