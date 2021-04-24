class CreateVocabularies < ActiveRecord::Migration[6.0]
  def change
    create_table :vocabularies do |t|
      t.string :albanian
      t.string :english

      t.timestamps
    end
  end
end
