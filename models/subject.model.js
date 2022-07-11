import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class subjectModel extends Model {}

    subjectModel.init(
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
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "area",
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
            modelName: "Subject",
            tableName: "subjects",
        }
    );

    return subjectModel;    
};