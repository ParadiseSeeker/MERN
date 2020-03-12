const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
	name: { type: String, required: true },
	descr: { type: String },
	date: { type: Date, default: Date.now },
	score: { type: Number, default: 0 },
	type: { type: String, ref: "ComponentType" },
	// type: { type: Types.ObjectId, ref: "ComponentType" },
	manufacturer: { type: String, ref: "Manufacturer" },
	// manufacturer: { type: Types.ObjectId, ref: "Manufacturer" },
	socket: { type: String },
	chipset: { type: String },
	formFactor: { type: String },
	slots: { type: Array },
	ramType: { type: Number },
	ramSlots: { type: Number },
	ramCapacity: { type: String },
	ramCapacity: { type: String },
	m2Slots: { type: Number },
	hddSlots: { type: Number },
	pciExpress16: { type: Number },
	pciExpress4: { type: Number },
})

module.exports = model("Videocard", schema)
