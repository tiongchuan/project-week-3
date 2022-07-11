import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class schoolModel extends Model {}

    schoolModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "name",
            },
            area: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "area",
            },
            schoolCode: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "school_code",
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "type",
            },
            funding: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "funding",
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
            },
              updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at",
            },
        },
        {
            sequelize,
            modelName: "School",
            tableName: "schools",
        }
    );

    return schoolModel;    
};