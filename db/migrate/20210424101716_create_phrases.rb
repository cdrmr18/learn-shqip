class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.string :alb
      t.string :en

      t.timestamps
    end
  end
end
