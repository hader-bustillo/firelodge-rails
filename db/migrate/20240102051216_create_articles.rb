class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.datetime :published_at
      t.boolean :archived, default: false

      t.timestamps
    end
  end
end
